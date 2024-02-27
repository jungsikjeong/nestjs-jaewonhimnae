import { Injectable } from '@nestjs/common';
import { Board } from './board.modal';

@Injectable()
export class BoardsService {
  private boards: Board[] = []; // 다른 컴포넌트에서 boards계열 값을 수정 못하게 private를 사용함

  getAllBoards(): Board[] {
    return this.boards;
  }
}
