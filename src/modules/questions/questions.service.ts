import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Question, QuestionDocument } from "./entities/questions.schema";
import { Test, TestDocument } from "../test/entities/test.schema";
import { Model } from "mongoose";
import { CreateQuestionDto } from "./dto/create-questions.dto";
import { UpdateQuestionDto } from "./dto/update-questions.dto";

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    @InjectModel(Test.name) private testModel: Model<TestDocument>
  ) {}

  async create(createQuestionDto: CreateQuestionDto): Promise<Question> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async findAll(): Promise<any[]> {
    const questions = await this.questionModel.find().exec();

    const questionsWithTests = await Promise.all(
      questions.map(async (question) => {
        const tests = await this.testModel.find({ index: { $in: question.tests } }).exec();
        return {
          ...question.toObject(),
          tests,
        };
      })
    );

    return questionsWithTests;
  }

  async findOne(id: string): Promise<any> {
    const question = await this.questionModel.findById(id).exec();
    if (!question) {
      throw new Error(`Question with id ${id} not found`);
    }
    const tests = await this.testModel.find({ index: { $in: question.tests } }).exec();
    return {
      ...question.toObject(),
      tests,
    };
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
    return this.questionModel.findByIdAndUpdate(id, updateQuestionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.questionModel.findByIdAndRemove(id).exec();
  }
}
