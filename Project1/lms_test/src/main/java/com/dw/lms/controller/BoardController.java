package com.dw.lms.controller;

import ch.qos.logback.core.model.Model;
import com.dw.lms.model.Board;
import com.dw.lms.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoardController {
    @Autowired
    BoardService boardService;
    @GetMapping("/board/write") // localhost:8080/board/write
    public String boardWriteForm(){
        return "boardwrite";
    }

    @PostMapping("/board/writedo")
    public String boardWriteDo(Board board){
        boardService.boardWriteDo(board);
        //System.out.println(board.getTitle());
        return "";
    }

    @GetMapping("/board/list")
    public List<Board> boardList(){
        return boardService.getBoardList();
    }
}
