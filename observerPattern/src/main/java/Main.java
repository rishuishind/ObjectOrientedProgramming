package main.java;

import main.java.observable.WeatherStationSubject;
import main.java.observer.MobileObserver;
import main.java.observer.Observer;
import main.java.observer.TvObserver;

public class Main {
    public static void main(String[] args) {
        WeatherStationSubject weatherStation = new WeatherStationSubject();
        Observer m1 = new MobileObserver();
        Observer t1 = new TvObserver();
        weatherStation.addObserver(m1);
        weatherStation.addObserver(t1);
        weatherStation.setWeather(40);
        weatherStation.setWeather(40);
        weatherStation.setWeather(50);
    }
}
