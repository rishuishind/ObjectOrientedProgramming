package main.java.observable;

import java.util.ArrayList;
import java.util.List;

import main.java.observer.Observer;

public class InventorySubject implements Subject {

    private List<Observer> observers = new ArrayList<>();
    private int inventoryCount = 0;

    @Override
    public void addObserver(Observer obj) {
        observers.add(obj);
    }

    @Override
    public void removeObserver(Observer obj) {
        observers.remove(obj);
    }

    @Override
    public void notifyObserver() {
        for (Observer observer : observers) {
            observer.update();
        }
    }

    public void setInventory(int quantity) {
        if (inventoryCount <= 0) {
            notifyObserver();
        }
        this.inventoryCount += quantity;
    }

}
