import { PartialType } from "@nestjs/mapped-types";
import { CreateQuestionDto } from "./create-questions.dto";

export class UpdateQuestionDto extends PartialType(CreateQuestionDto) {}
