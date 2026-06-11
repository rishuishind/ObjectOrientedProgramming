package main.java.toppingDecorator;

import main.java.Pizza;

public abstract class ToppingDecorator extends Pizza {
    Pizza pizza;

    ToppingDecorator(Pizza pizza) {
        this.pizza = pizza;
    }
}
