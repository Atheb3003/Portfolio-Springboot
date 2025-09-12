package portfolioWeb.portfolio.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index"; // busca index.html dentro de templates/
    }

        @GetMapping("/projectDetails")
    public String projectDetails(Model model) {
        model.addAttribute("projectName", "Proyecto 0");
        model.addAttribute("projectDescription", "Esto es el ejemplo de descripcion de proyecto, tambien llamado pepe");
        
        return "projectDetails";
    }
}
