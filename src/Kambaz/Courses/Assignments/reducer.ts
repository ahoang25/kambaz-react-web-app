import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description: string;
  points: number;
  due: string;
  available: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

function loadAssignments(): Assignment[] {
  const savedAssignments = localStorage.getItem("assignments");
  return savedAssignments ? JSON.parse(savedAssignments) : initialAssignments;
}

function saveAssignments(assignments: Assignment[]) {
  localStorage.setItem("assignments", JSON.stringify(assignments));
}

const initialState: AssignmentsState = {
  assignments: loadAssignments(),
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Partial<Assignment>>) => {
      const payload = action.payload;

      const newAssignment: Assignment = {
        _id: payload._id || uuidv4(),
        title: payload.title || "Untitled Assignment",
        course: payload.course || "",
        description: payload.description || "No description provided.",
        points: payload.points ?? 100,
        due: payload.due || "",
        available: payload.available || new Date().toISOString().split("T")[0],
      };

      state.assignments.push(newAssignment);
      saveAssignments(state.assignments);
    },

    deleteAssignment: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.assignments = state.assignments.filter((a) => a._id !== idToDelete);
      saveAssignments(state.assignments);
    },

    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const updated = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? updated : a
      );
      saveAssignments(state.assignments);
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
