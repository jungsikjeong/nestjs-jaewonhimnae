import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.modal';
// 1 브라우저에서 /boards 에 요청을 보냄

// 2 컨트롤러가 받음 ('/boards')
@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // 3 get요청을 받음
  @Get('/')
  getAllBoard(): Board[] {
    return this.boardService.getAllBoards();
  }
}
