import { addComponent, defineNuxtModule } from "@nuxt/kit";
import path from "path";
import fs from "fs";

export default defineNuxtModule({
  meta: {
    name: "@iconscout/vue-unicons",
    configKey: "sample",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },
  async setup(moduleOptions, nuxt) {
    fs.readdir(path.resolve(__dirname, "icons"), (err, files) => {
      files.forEach((file) => {
        const kebabCaseName = file.split(".")[0];
        const pascalCaseName = file
          .replace(".vue", "")
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join("");

        addComponent({
          name: pascalCaseName,
          pascalName: pascalCaseName,
          kebabName: kebabCaseName,
          filePath: path.resolve(__dirname, "icons", file),
        });
      });
    });
  },
});
