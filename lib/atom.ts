import { atom } from "jotai";

import { OpenAIModel } from "../types/type";

export const apiKeyAtom = atom("");
export const modelAtom = atom<OpenAIModel>("gpt-3.5-turbo");
