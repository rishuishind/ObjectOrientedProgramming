package main.java.observer;

import main.java.observable.WeatherStationSubject;

public class TvObserver implements Observer {

    WeatherStationSubject sub;

    public TvObserver(WeatherStationSubject obj) {
        this.sub = obj;
    }

    @Override
    public void update() {

        System.out.println("Current weather is " + sub.getData());
    }

}
