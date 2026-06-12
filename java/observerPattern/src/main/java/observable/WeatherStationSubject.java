package main.java.observable;

import java.util.ArrayList;
import java.util.List;

import main.java.observer.Observer;

public class WeatherStationSubject implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private int tempreature = 0;

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

    public void setWeather(int temp) {
        if (this.tempreature != temp) {
            this.tempreature = temp;
            notifyObserver();
        }
    }

    public int getData() {
        return this.tempreature;
    }

}
