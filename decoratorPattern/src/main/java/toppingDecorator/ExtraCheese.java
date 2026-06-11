package main.java.toppingDecorator;

import main.java.Pizza;

public class ExtraCheese extends ToppingDecorator {

    public ExtraCheese(Pizza pizza) {
        super(pizza);
    }

    public int cost() {
        return pizza.cost() + 10;
    }

}
