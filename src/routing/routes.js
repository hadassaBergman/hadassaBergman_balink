import WeatherDay from "../components/WeatherDay";

export {routes};

const routes= {
    public: [],
    private: [],
};

routes.public.push({exact: true, path: '/:region/day/:index', page: 'WeatherDay', component: WeatherDay});
