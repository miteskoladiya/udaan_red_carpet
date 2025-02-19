// src/scripts/addData.js
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { Position, Nominee } from "../model/User.js";
import connectDB from "../lib/db.js";

async function insertPositionsAndNominees() {
  try {
    await connectDB();

    // First, clear existing data
    //await Position.deleteMany({});
    //await Nominee.deleteMany({});

    const filePath = path.resolve("positions.json");
    const positionsData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for (const positionData of positionsData) {
      // Create position
      const position = new Position({ name: positionData.name });
      await position.save();

      // Create nominees with error handling
      const nomineePromises = positionData.nominees.map(async (nominee) => {
        try {
          const newNominee = new Nominee({
            id: nominee.id,
            name: nominee.name,
            position: position.name,
            imageUrl: nominee.imageUrl,
            votes: 0 // Explicitly set initial votes
          });
          return await newNominee.save();
        } catch (error) {
          console.error(`Failed to insert nominee ${nominee.name}:`, error.message);
          return null;
        }
      });

      const insertedNominees = (await Promise.all(nomineePromises))
        .filter(nominee => nominee !== null);

      // Update position with successful nominees
      position.nominees = insertedNominees.map(n => n._id);
      await position.save();
    }

    console.log("✅ Positions & Nominees added successfully!");
  } catch (error) {
    console.error("❌ Error inserting data:", error);
  } finally {
    await mongoose.connection.close();
  }
}

insertPositionsAndNominees();