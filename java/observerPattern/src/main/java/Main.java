package main.java;

import main.java.observable.InventorySubject;
import main.java.observable.WeatherStationSubject;
import main.java.observer.EmailNotifier;
import main.java.observer.MobileObserver;
import main.java.observer.Observer;
import main.java.observer.PhoneNotifier;
import main.java.observer.TvObserver;

public class Main {
    public static void main(String[] args) {
        WeatherStationSubject weatherStation = new WeatherStationSubject();
        InventorySubject inventory = new InventorySubject();
        Observer m1 = new MobileObserver();
        Observer t1 = new TvObserver(weatherStation);
        Observer phone1 = new PhoneNotifier("1234567890");
        Observer email2 = new EmailNotifier("rishabhsharma2348@gmail.com");
        weatherStation.addObserver(m1);
        weatherStation.addObserver(t1);
        inventory.addObserver(phone1);
        inventory.addObserver(email2);
        inventory.setInventory(50);
        weatherStation.setWeather(40);
    }
}
