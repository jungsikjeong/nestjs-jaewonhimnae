import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.modal';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 컴포넌트에서 boards계열 값을 수정 못하게 private를 사용함

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);

    return board;
  }
}
