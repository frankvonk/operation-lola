import type { Note } from "./interfaces";

export type AmplifyClient = {
  models: {
    Note: {
      list(): Promise<{ data: Note[] | null }>;
      create(input: Partial<Note>): Promise<{ data: Note | null }>;
      delete(input: { id: string }): Promise<{ data: Note | null }>;
    };
  };
};
