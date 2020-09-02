<template>
  <div>
    <div v-if="title.length > 0" class="layer w-100 mB-10">
      <h6 class="lh-1">{{ title }}</h6>
    </div>
    <ul class="list-task list-group todo-list" data-role="tasklist">
      <li
        v-for="(task, index) in tasks"
        v-bind:key="index"
        class="list-group-item bdw-0"
        data-role="task"
      >
        <div class="checkbox checkbox-circle checkbox-info peers ai-c">
          <input
            type="checkbox"
            :checked="task.done"
            :id="'todoTask' + index.toString()"
            @click="task.done = !task.done"
            name="todoCheckbox"
            class="peer"
          />
          <label
            :for="'todoTask' + index.toString()"
            class=" peers peer-greed js-sb ai-c"
          >
            <span
              :class="{ todoTaskDone: task.done }"
              class="peer peer-greed"
              >{{ task.description }}</span
            >
            <span class="peer" v-if="hasLabel(task.label) || task.done">
              <span
                :class="
                  task.done
                    ? priorityBadges.done
                    : badgeForPriority(task.priority)
                "
                class="badge badge-pill fl-r lh-0 p-10"
                >{{ task.done ? "Done" : task.label }}</span
              >
            </span>
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface TodoTask {
  description: string;
  label: string | null;
  done: boolean;
  priority: number;
}

@Component({
  name: "TodoListC",
  components: {}
})
export default class TodoListC extends Vue {
  @Prop({
    default: () => {
      return [
        {
          description: "No tasks",
          label: null,
          done: false
        }
      ];
    }
  })
  private tasks!: TodoTask[];
  @Prop({ default: "" }) private title!: string;

  protected priorityBadges = {
    done: "badge-success",
    todo: ["badge-light", "badge-info", "badge-warning", "badge-danger"]
  };

  get maxPriority(): number {
    return Math.max.apply(
      null,
      this.tasks.map(value => value.priority)
    );
  }
  get minPriority(): number {
    return Math.min.apply(
      null,
      this.tasks.map(value => value.priority)
    );
  }
  get priorityDifference() {
    return this.maxPriority - this.minPriority;
  }
  get totalBadges() {
    return this.priorityBadges.todo.length - 1;
  }

  badgeForPriority(priority: number) {
    const relativePriority =
      (priority - this.minPriority) / this.priorityDifference;
    const badgeIndex = Number(relativePriority * this.totalBadges);
    return this.priorityBadges.todo[badgeIndex];
  }

  hasLabel(label: string) {
    return label !== undefined && label !== null && label !== "";
  }
}
</script>

<style scoped lang="sass">
@import '@/style/global.sass';
.todo-list
  .list-group-item
    background-color: inherit

.todoTaskDone
  text-decoration: line-through
  font-weight: lighter
  color: lightgray
</style>
