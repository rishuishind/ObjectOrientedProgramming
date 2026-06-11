package main;

import main.java.Margherita;
import main.java.Pizza;
import main.java.toppingDecorator.ExtraCheese;

public class Main {
    public static void main(String[] args) {
        Pizza pi = new ExtraCheese(new Margherita());
        System.out.println(pi.cost());
    }
}
