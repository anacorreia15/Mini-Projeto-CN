package com.cn.FrontEndMicroservice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerLogin {

    @GetMapping({"/", "/logout"})
    public String getLogin(){
        return "index.html";
    }

    @GetMapping({"/home"})
    public String getHomePage(){
        return "home.html";
    }

    @GetMapping({"/signup-page"})
    public String getSignupPage(){
        return "signup.html";
    }

    @GetMapping("/profile")
    public String getProfile(){
        return "user-data.html";
    }

    @GetMapping("/access-denied")
    public String getDeniedAccess(){
        return "access-denied.html";
    }
}
