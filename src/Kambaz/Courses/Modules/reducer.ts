import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { modules as initialModules } from "../../Database";
import { v4 as uuidv4 } from "uuid";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
  editing: boolean;
}

interface ModulesState {
  modules: Module[];
}

function loadModulesFromLocalStorage(): Module[] {
  const savedModules = localStorage.getItem("modules");
  return savedModules ? JSON.parse(savedModules) : initialModules;
}

function saveModulesToLocalStorage(mods: Module[]) {
  localStorage.setItem("modules", JSON.stringify(mods));
}

const initialState: ModulesState = {
  modules: loadModulesFromLocalStorage(),
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (
      state,
      action: PayloadAction<{ name: string; course: string }>
    ) => {
      const { name, course } = action.payload;
      const newModule: Module = {
        _id: uuidv4(),
        name,
        course,
        lessons: [],
        editing: false,
      };
      state.modules.push(newModule);
      saveModulesToLocalStorage(state.modules);
    },

    deleteModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.filter((m) => m._id !== moduleId);
      saveModulesToLocalStorage(state.modules);
    },

    updateModule: (state, action: PayloadAction<Module>) => {
      const updatedModule = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === updatedModule._id ? updatedModule : m
      );
      saveModulesToLocalStorage(state.modules);
    },

    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
      saveModulesToLocalStorage(state.modules);
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
