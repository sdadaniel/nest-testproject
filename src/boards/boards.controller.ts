import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get('/')
  // getAllBoards(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: number): Board {
  //   return this.boardService.getBoardById(id);
  // }

  // @Get('/writer/:writer')
  // getBoardByWriter(@Param() { writer }): Board[] {
  //   return this.boardService.getBoardByWriter(writer);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param() { id },
  //   @Body('status', BoardStatusValidation) status,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }

  @Delete('/:id')
  deleteBoardById(@Param('id', ParseIntPipe) id) {
    this.boardService.deleteBoardById(id);
  }

  // @Delete('/:id')
  // deleteBoardById(@Param('id') id: number) {
  //   this.boardService.deleteBoardById(id);
  // }
  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
}
