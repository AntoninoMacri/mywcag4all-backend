import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { QuestionService } from "./questions.service";
import { CreateQuestionDto } from "./dto/create-questions.dto";
import { UpdateQuestionDto } from "./dto/update-questions.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller("questions")
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  //@UseGuards(AuthGuard("jwt"))
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto);
  }

  @Get()
  //@UseGuards(AuthGuard("jwt"))
  findAll() {
    return this.questionService.findAll();
  }

  @Get(":id")
  //@UseGuards(AuthGuard("jwt"))
  findOne(@Param("id") id: string) {
    return this.questionService.findOne(id);
  }

  @Patch(":id")
  @UseGuards(AuthGuard("jwt"))
  update(@Param("id") id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(id, updateQuestionDto);
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  remove(@Param("id") id: string) {
    return this.questionService.remove(id);
  }
}
