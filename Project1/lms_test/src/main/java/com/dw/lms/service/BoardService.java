package com.dw.lms.service;

import com.dw.lms.model.Board;
import com.dw.lms.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardService {
    @Autowired
    BoardRepository boardRepository;
    public void boardWriteDo(Board board){
        boardRepository.save(board);
    }

    public List<Board> getBoardList(){
        return boardRepository.findAll();
    }

}
