import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuestionService } from "./questions.service";
import { QuestionController } from "./questions.controller";
import { Question, QuestionSchema } from "./entities/questions.schema";
import { Test, TestSchema } from "../test/entities/test.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
      { name: Test.name, schema: TestSchema },
    ]),
  ],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
