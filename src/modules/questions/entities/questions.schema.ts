import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type QuestionDocument = Question & Document;

@Schema({ collection: "questions" })
export class Question {
  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  text: string;

  @Prop({ type: [Number], required: true })
  tests: number[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
