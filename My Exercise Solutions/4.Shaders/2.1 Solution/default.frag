#version 330 core
out vec4 FragColor;

in vec3 color;
in float scaleuni;

void main()
{
    FragColor = vec4(color * scaleuni, 1.0f);
}