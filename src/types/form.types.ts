// ZOD
import { z } from "zod";
import { formSchema } from "../helpers/formSchema.helpers";

// zod type
export type FormSchemaType = z.infer<typeof formSchema>;
