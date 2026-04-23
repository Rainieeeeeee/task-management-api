package com.example.demo;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/todo")
public class TodoController {
    @Autowired
    private TodoService todoService;


    @GetMapping
    public List<Todo>getList(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
    
        return todoService.getList(username);
    }

    @PostMapping
    public void postList(@RequestBody Todo t){
        
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        todoService.postList(username,t);
      
    }

    @PutMapping
    public void putList(@RequestBody Todo t){
         String username = SecurityContextHolder.getContext().getAuthentication().getName();
        todoService.putList(username, t);
    }

    @DeleteMapping("/{id}")
    public void deleteList(@PathVariable int id){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        todoService.deleteList(username, id);
    
    }
}

  
