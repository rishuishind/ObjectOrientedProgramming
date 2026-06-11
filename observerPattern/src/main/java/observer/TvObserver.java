package main.java.observer;

public class TvObserver implements Observer {

    @Override
    public void update() {
        System.out.println("It has changed the value in TV");
    }

}
