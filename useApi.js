import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../utils/api';

// ─── TASKS ───────────────────────────────────────────────
export const useTasks = (filters = {}) =>
  useQuery({
    queryKey: ['tasks', filters],
    queryFn: async () => {
      const { data } = await api.get('/tasks', { params: filters });
      return data.tasks;
    },
  });

export const useTaskStats = () =>
  useQuery({
    queryKey: ['task-stats'],
    queryFn: async () => {
      const { data } = await api.get('/tasks/stats');
      return data.stats;
    },
  });

export const useCreateTask = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (task) => api.post('/tasks', task).then(r => r.data.task),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['tasks'] }); qc.invalidateQueries({ queryKey: ['task-stats'] }); },
  });
};

export const useUpdateTask = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }) => api.put(`/tasks/${id}`, data).then(r => r.data.task),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['tasks'] }); qc.invalidateQueries({ queryKey: ['task-stats'] }); },
  });
};

export const useDeleteTask = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/tasks/${id}`),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ['tasks'] }); qc.invalidateQueries({ queryKey: ['task-stats'] }); },
  });
};

// ─── PROJECTS ─────────────────────────────────────────────
export const useProjects = () =>
  useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data } = await api.get('/projects');
      return data.projects;
    },
  });

export const useProject = (id) =>
  useQuery({
    queryKey: ['projects', id],
    queryFn: async () => {
      const { data } = await api.get(`/projects/${id}`);
      return data.project;
    },
    enabled: !!id,
  });

export const useCreateProject = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (project) => api.post('/projects', project).then(r => r.data.project),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useUpdateProject = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }) => api.put(`/projects/${id}`, data).then(r => r.data.project),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['projects'] }),
  });
};

export const useDeleteProject = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/projects/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['projects'] }),
  });
};

// ─── USERS ───────────────────────────────────────────────
export const useUsers = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await api.get('/users');
      return data.users;
    },
  });

export const useUpdateUserRole = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, role }) => api.put(`/users/${id}/role`, { role }).then(r => r.data.user),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  });
};

export const useDeleteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id) => api.delete(`/users/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  });
};

export const useInviteUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (user) => api.post('/users', user).then(r => r.data.user),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),
  });
};
