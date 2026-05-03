import Datasource from "../datasource";

export const initORM = async () => {
  if (!Datasource.isInitialized) {
    await Datasource.initialize();
  }
  return Datasource;
};
