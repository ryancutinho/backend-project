import 'dotenv/config'

import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import connectDB from "./db/index.js"


connectDB() 