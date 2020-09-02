<template>
  <div class="container-fluid">
    <div class="row">
      <reminders-c
        :items="getMyReminderEvents()"
        v-on:add="addItem"
        v-on:remove="removeItem"
        v-on:edit="editItem"
      ></reminders-c>
      <div class="col-md-8">
        <full-calendar
          :options="calendarOptions"
          :events="events"
        ></full-calendar>
      </div>
    </div>

    <b-modal
      v-model="modalShow"
      ref="calendar-add-modal"
      id="calendar-add"
      title="Add Event"
    >
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="event-title-input" class="fw-500">Event title</label>
            <input
              v-model="reminderEventTitle"
              id="event-title-input"
              class="form-control bdc-grey-200"
            />
          </div>
          <div class="row">
            <div class="col-md-6">
              <label class="fw-500">Start</label>
              <div class="timepicker-input input-icon form-group">
                <div class="input-group">
                  <div class="input-group-addon bd bdwR-0">
                    <i class="icon-calendar"></i>
                  </div>
                  <input
                    v-model="reminderEventStart"
                    type="text"
                    class="form-control bdc-grey-200 start-date"
                    placeholder="Datepicker"
                    data-provide="datepicker"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <label class="fw-500">End</label>
              <div class="timepicker-input input-icon form-group">
                <div class="input-group">
                  <div class="input-group-addon bd bdwR-0">
                    <i class="icon-calendar"></i>
                  </div>
                  <input
                    v-model="reminderEventEnd"
                    type="text"
                    class="form-control bdc-grey-200 end-date"
                    placeholder="Datepicker"
                    data-provide="datepicker"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="event-descr-input" class="fw-500"
              >Event description</label
            >
            <textarea
              v-model="reminderEventDescription"
              id="event-descr-input"
              class="form-control bdc-grey-200"
              rows="5"
            ></textarea>
          </div>
          <div class="text-right">
            <button class="btn btn-primary cur-p" data-dismiss="modal">
              Done
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RemindersC from "../components/Reminders.vue";
import { addHours } from "../utils";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

@Component({
  name: "Calendar",
  components: {
    RemindersC,
    FullCalendar
  }
})
export default class Calendar extends Vue {
  protected modalShow = false;
  protected events = "https://fullcalendar.io/demo-events.json";
  protected calendarOptions = {
    // plugins: ["dayGrid", "timeGrid", "list", "bootstrap"],
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    height: 800,
    editable: true,
    header: {
      left: "month,agendaWeek,agendaDay,listMonth",
      center: "title",
      right: "today prev,next"
    }
  };
  protected reminderEventStart = null;
  protected reminderEventEnd = null;
  protected reminderEventTitle = null;
  protected reminderEventDescription = null;

  get today() {
    return new Date();
  }
  get day() {
    return this.today.getDate();
  }
  get month() {
    return this.today.getMonth();
  }
  get year() {
    return this.today.getFullYear();
  }

  getMyReminderEvents() {
    return [
      {
        done: false,
        title: "Test",
        start: new Date(),
        fullDay: true,
        desc: "Website development"
      },
      {
        done: false,
        title: "Test",
        start: new Date(),
        end: addHours(new Date(), 2),
        desc: "Website development"
      },
      {
        done: false,
        title: "Test",
        start: new Date(),
        desc: "Website development"
      }
    ];
  }

  addItem() {
    this.modalShow = true;
    // TODO
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  editItem(item: string) {
    // TODO
  }

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  removeItem(item: string) {
    // TODO
  }

  getSampleEvents() {
    // This can also be used for the calendar component instead of json
    // It is meant to provide a starting point and not used
    return [
      {
        title: "All Day Event",
        start: new Date(this.year, this.month, 1),
        desc: "Meetings",
        bullet: "success"
      },
      {
        title: "Long Event",
        start: new Date(this.year, this.month, this.day - 5),
        end: new Date(this.year, this.month, this.day - 2),
        desc: "Hangouts",
        bullet: "success"
      }
    ];
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.fc
  background-color: $default-white
  border: 1px solid $border-color

  th
    text-align: center
    padding: 15px
    background-color: transparent
    color: $default-text-color
    font-size: 12px
    text-transform: uppercase
    border-right-width: 0
    border-left-width: 0

  button
    background-color: $default-white
    background-image: none
    height: 37px
    padding: 0 15px
    color: darken($default-text-color, 10%)

    &.fc-state-default
      border-color: $border-color
      box-shadow: none

    &.fc-state-active
      box-shadow: none
      background-color: $border-color

.fc-toolbar
  padding: 20px 20px 0

.fc-view,
.fc-view > table
  background-color: $default-white

.fc-basic-view td.fc-day-number,
.fc-basic-view td.fc-week-number span
  padding: 7px 15px

.fc-unthemed
  .fc-content,
  .fc-divider,
  .fc-popover,
  .fc-row,
  tbody,
  td,
  th,
  thead
    border-color: $border-color

  .fc-today
    background-color: transparent

.fc-basic-view
  .fc-day-number
    &.fc-today
      background-color: $default-info
      color: $default-white
      display: inline-block
      float: right
      border-radius: 50%
      padding: 6px 8px
      line-height: 1
      margin: 4px 4px 0 0

.fc-event-container
  .fc-event
    border-radius: 0
    border: 0
    background-color: $inverse-info
    color: $default-info !important
    font-size: 12px
    line-height: 2.5
    padding: 0 15px

  .fc-day-grid-event
    margin: 1px 5px 5px
</style>
