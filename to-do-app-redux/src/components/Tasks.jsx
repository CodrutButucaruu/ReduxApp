import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadTasks, deleteTask, updateCompleted} from '../store/tasks';

const FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
};

const Tasks = () => {
    const {tasks, loading} = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [filter, setFilter] = React.useState(FILTERS.ALL);

    useEffect(() => {
        dispatch(loadTasks());
    }, [dispatch]);

    const filteredTasks = tasks.filter((task) => {
        if (filter === FILTERS.ALL) return true;
        if (filter === FILTERS.ACTIVE) return !task.completed;
        if (filter === FILTERS.COMPLETED) return task.completed;
        return true;
    });

    return (
        <div
            style={{
                maxWidth: 500,
                margin: '0 auto',
                padding: 24,
                background: '#f9f9f9',
                borderRadius: 8,
            }}
        >
            <h2 style={{textAlign: 'center'}}>Tasks</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: 16,
                }}
            >
                <button
                    style={{
                        margin: '0 4px',
                        background:
                            filter === FILTERS.ALL ? '#1976d2' : '#e0e0e0',
                        color: filter === FILTERS.ALL ? '#fff' : '#333',
                        border: 'none',
                        borderRadius: 4,
                        padding: '6px 12px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setFilter(FILTERS.ALL)}
                >
                    All
                </button>
                <button
                    style={{
                        margin: '0 4px',
                        background:
                            filter === FILTERS.ACTIVE ? '#1976d2' : '#e0e0e0',
                        color: filter === FILTERS.ACTIVE ? '#fff' : '#333',
                        border: 'none',
                        borderRadius: 4,
                        padding: '6px 12px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setFilter(FILTERS.ACTIVE)}
                >
                    Active
                </button>
                <button
                    style={{
                        margin: '0 4px',
                        background:
                            filter === FILTERS.COMPLETED
                                ? '#1976d2'
                                : '#e0e0e0',
                        color: filter === FILTERS.COMPLETED ? '#fff' : '#333',
                        border: 'none',
                        borderRadius: 4,
                        padding: '6px 12px',
                        cursor: 'pointer',
                    }}
                    onClick={() => setFilter(FILTERS.COMPLETED)}
                >
                    Completed
                </button>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {filteredTasks.length === 0 ? (
                        <p style={{textAlign: 'center', color: '#888'}}>
                            No tasks found.
                        </p>
                    ) : (
                        filteredTasks.map((task) => (
                            <div
                                key={task.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '8px',
                                    background: '#fff',
                                    borderRadius: 4,
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                                    padding: '8px 12px',
                                }}
                            >
                                <input
                                    type='checkbox'
                                    checked={task.completed}
                                    onChange={() =>
                                        dispatch(
                                            updateCompleted({
                                                ...task,
                                                completed: !task.completed,
                                            }),
                                        )
                                    }
                                    style={{marginRight: 12}}
                                />
                                <span
                                    style={{
                                        flex: 1,
                                        textDecoration: task.completed
                                            ? 'line-through'
                                            : 'none',
                                        color: task.completed ? '#888' : '#222',
                                    }}
                                >
                                    {task.task}
                                </span>
                                <button
                                    onClick={() => dispatch(deleteTask(task))}
                                    style={{
                                        marginLeft: 8,
                                        background: '#e53935',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: 4,
                                        padding: '4px 10px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Tasks;
