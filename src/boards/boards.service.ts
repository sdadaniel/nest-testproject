import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entity/board.entity';
import { BoardRepository } from './repository/board.repository';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards() {
  //   return this.boards;
  // }
  // createBoard({ title, description, writer }: CreateBoardDto): Board {
  //   const board: Board = {
  //     title,
  //     description,
  //     writer,
  //     status: BoardStatus.PUBLIC,
  //     id: this.id++,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  async deleteBoardById(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    console.log('result', result);
  }

  // getBoardById(id: number): Board {
  //   const found = this.boards.find((elem) => (elem.id = id));
  //   if (!found) {
  //     throw new NotFoundException('게시물을 찾을 수 없습니다.');
  //   }
  //   return found;
  // }
  // getBoardByWriter(writer): Board[] {
  //   return this.boards.filter((elem) => elem.writer === writer);
  // }
  // updateBoardStatus(id: number, status: BoardStatus) {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
  // deleteBoardById(id: number): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((elem) => elem.id !== found.id);
  // }
}
