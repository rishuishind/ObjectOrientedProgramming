package main.java.observable;

import main.java.observer.Observer;

public interface Subject {
    void addObserver(Observer obj);

    void removeObserver(Observer obj);

    void notifyObserver();
}
