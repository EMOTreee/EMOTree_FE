type ActiveItemCallback = (index: number) => void;
type MovementChangeCallback = (isMoving: boolean) => void;
type InitCallback = (instance: InfiniteGridMenu) => void;
type UpdateCallback = (deltaTime: number) => void;

interface Camera {
  matrix: mat4;
  near: number;
  far: number;
  fov: number;
  aspect: number;
  position: vec3;
  up: vec3;
  matrices: {
    view: mat4;
    projection: mat4;
    inversProjection: mat4;
  };
}

interface MenuItem {
  image: string;
  link: string;
  title: string;
  description: string;
  color: string;
}

interface InfiniteMenuProps {
  items?: MenuItem[];
}