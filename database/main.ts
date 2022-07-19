import mongoose from "mongoose"
import {mongoID} from "../Utils/constants"

export default async function Connect() {
mongoose.connect(mongoID, {
        connectTimeoutMS: 30000,
      })
      .then(() => {
        console.log(`Db Connected`);
      });
}


