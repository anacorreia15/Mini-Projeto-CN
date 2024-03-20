package com.cn.FrontEndMicroservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLogin {

    @GetMapping({"/login", "/logout", "/"})
    public String getLogin(){
        return "login.html";
    }

    @GetMapping({"/home"})
    public String getHomePage(){
        return "home.html";
    }

    /*
    @GetMapping("/acesso-negado")
    public String getAcessoNegadoPage(){
        return "acesso-negado.html";
    } */
}
