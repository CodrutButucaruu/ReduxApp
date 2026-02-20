import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadTasks, deleteTask} from '../store/tasks';

const Tasks = () => {
    const {tasks, loading} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '8px',
                            }}
                        >
                            <span style={{flex: 1}}>{task.task}</span>
                            <button onClick={() => dispatch(deleteTask(task))}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default Tasks;
