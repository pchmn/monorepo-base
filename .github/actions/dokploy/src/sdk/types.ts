export interface Project {
  projectId: string;
  name: string;
  description: string;
  createdAt: string;
  adminId: string;
  env: string;
  applications: Application[];
  mariadb: unknown[];
  mongo: unknown[];
  mysql: unknown[];
  postgres: unknown[];
  redis: unknown[];
  compose: unknown[];
}

export interface Application {
  applicationId: string;
  name: string;
  appName: string;
  description: string;
  env: string | null;
  buildArgs: string | null;
  memoryReservation: string | null;
  memoryLimit: string | null;
  cpuReservation: string | null;
  cpuLimit: string | null;
  title: string | null;
  enabled: boolean | null;
  subtitle: string | null;
  command: string | null;
  refreshToken: string;
  sourceType: 'github' | 'docker' | 'git';
  repository: string | null;
  owner: string | null;
  branch: string | null;
  buildPath: string;
  autoDeploy: boolean;
  gitlabProjectId: string | null;
  gitlabRepository: string | null;
  gitlabOwner: string | null;
  gitlabBranch: string | null;
  gitlabBuildPath: string;
  gitlabPathNamespace: string | null;
  bitbucketRepository: string | null;
  bitbucketOwner: string | null;
  bitbucketBranch: string | null;
  bitbucketBuildPath: string;
  username: string | null;
  password: string | null;
  dockerImage: string | null;
  customGitUrl: string | null;
  customGitBranch: string | null;
  customGitBuildPath: string | null;
  customGitSSHKeyId: string | null;
  dockerfile: string | null;
  dockerContextPath: string | null;
  dockerBuildStage: string | null;
  dropBuildPath: string | null;
  healthCheckSwarm: string | null;
  restartPolicySwarm: string | null;
  placementSwarm: string | null;
  updateConfigSwarm: string | null;
  rollbackConfigSwarm: string | null;
  modeSwarm: string | null;
  labelsSwarm: string | null;
  networkSwarm: string | null;
  replicas: number;
  applicationStatus: 'idle' | 'running' | 'done' | 'error';
  buildType: string;
  publishDirectory: string | null;
  createdAt: string;
  registryId: string | null;
  projectId: string;
  githubId: string | null;
  gitlabId: string | null;
  bitbucketId: string | null;
  serverId: string | null;
  project: {
    projectId: string;
    name: string;
    description: string;
    createdAt: string;
    adminId: string;
    env: string;
  };
  domains: unknown[];
  deployments: unknown[];
  mounts: unknown[];
  redirects: unknown[];
  security: unknown[];
  ports: unknown[];
  registry: unknown | null;
  gitlab: unknown | null;
  github: unknown | null;
  bitbucket: unknown | null;
  server: unknown | null;
}

export interface Domain {
  domainId: string;
  host: string;
  https: boolean;
  port: number;
  path: string;
  serviceName: string | null;
  domainType: string;
  uniqueConfigKey: number;
  createdAt: string;
  composeId: string | null;
  applicationId: string;
  certificateType: string;
  application: Application;
}
