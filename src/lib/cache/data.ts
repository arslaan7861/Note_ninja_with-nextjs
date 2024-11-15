import { uploadType } from "@/types/types";
import noteSchema from "../DB/noteSchema";
interface cachedDataType {
  data: uploadType[];
  initialize: () => Promise<void>;
  find: (id: string) => Promise<uploadType | boolean>;
}
const cachedData: cachedDataType = {
  data: [],
  initialize: async function () {
    const notes = await noteSchema.find({});
    this.data = notes;
    console.log(this.data);
  },
  find: async function (id: string) {
    console.log("finding", id, this.data);
    return this.data.find((note) => note._id == id) || false;
  },
};

export default cachedData;
