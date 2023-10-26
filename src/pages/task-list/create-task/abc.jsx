import { useForm } from "react-hook-form";
import axios from "axios";

function Abc() {
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  const { handleSubmit } = useForm();

  const baseurl = "http://192.168.3.36:8000/";

  const onSubmit = async () => {
    try {
      // Step 1: Create a Task
      const task = {
        task_name: "Australia",
        description: "test- Australia",
        task_submit: null,
        due_date: null,
        priority: "medium",
        status: "todo",
        points: 0,
        assigner: 1,
        assignee: 2,
      };

      const taskResponse = await axios.post(`${baseurl}/task-create/`, task, {
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      });
      const taskId = taskResponse.data.id;

      // Step 2: Create a qc_task using the taskId
      const qc_task = {
        task: taskId,
        user: 2,
        check_text: 5,
      };

      const qcTaskResponse = await axios.post(
        `${baseurl}/qc-task-create/`,
        qc_task,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Token ${userInfo?.token}`,
          },
        }
      );
      const qcTaskId = qcTaskResponse.data.id;

      // Step 3: Create a qc_status using the qcTaskId
      const qc_status = {
        qc: qcTaskId,
        is_checked: false,
        comment: null,
      };

      await axios.post(`${baseurl}/qc-status-create/`, qc_status, {
        headers: {
          "content-type": "application/json",
          Authorization: `Token ${userInfo?.token}`,
        },
      });
    } catch (error) {
      // Handle errors
    }
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit" className="border border-green-700 px-10 py-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Abc;
