<template>
    <h1 class="page-header text-center">Calendar</h1>

    <div class="calendar">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <button type="button" class="btn btn-light" @click="onPrev">prev</button>
                    </div>
                    <div class="col text-center">{{ monthName }} {{ year }}</div>
                    <div class="col">
                        <button type="button" class="btn btn-light float-right" @click="onNext">next</button>
                    </div>
                </div>
                <hr>

                <div class="row">
                    <div class="col">
                        <div class="dates-block">
                            <div class="date-item" v-for="date in dates" :key="date" v-text="date"></div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="days-block">
                            <div class="day-item" v-for="num in getStartDay" :key="num"></div>
                            <div class="day-item" v-for="day in getNumDays" :key="day" v-text="day" :class="currentDateClass(day)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        var date = new Date();

        return {
            dates: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            year: date.getFullYear(),
            month: date.getMonth()
        }
    },

    computed: {
        monthName: function() {
            var date = new Date(this.year, this.month);
            return date.toLocaleString("default", {month: "long"});
        },

        getNumDays: function() {
            var nextMonth = this.month + 1;
            return new Date(this.year, nextMonth, 0).getDate();
        },

        getStartDay: function() {
            return new Date(this.year, this.month).getDay();
        }
    },

    methods: {
        onPrev: function() {
            if (this.month === 0) {
                this.year--;
                this.month = 11;
            } else {
                this.month--;
            }
        },

        onNext: function() {
            if (this.month === 11) {
                this.year++;
                this.month = 0;
            } else {
                this.month++;
            }
        },

        currentDateClass: function(date) {
            return new Date().toDateString() === new Date(this.year, this.month, date).toDateString() ? "badge badge-pill badge-primary" : "";
        }
    }
}
</script>

<style>
    .dates-block,
    .days-block {
        width: 100%;
    }

    .dates-block .date-item,
    .days-block .day-item {
        width: calc(100%/7);
        display: inline-block;
        text-align: center;
        user-select: none;
    }
</style>