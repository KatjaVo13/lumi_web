# Client capabilities

## Purpose
Document assumptions that differ across clients so those differences stay explicit.

## Capability matrix
| Capability | Web | Mobile | Embedded |
|---|---|---|---|
| Rich data tables | strong | limited | minimal |
| Offline tolerance | low to medium | medium to high | high |
| Background execution | limited browser rules | OS-controlled | device/platform-specific |
| Local persistence | browser storage | app storage | device storage |
| Notifications | browser-specific | push notifications | device/protocol-specific |
| Upgrade frequency | fast | slower | potentially slowest |

## Repository-specific notes
Web can render denser screens and richer tables than mobile. Browser-specific capabilities such as file upload, multiple tabs, and admin-heavy views must not leak into shared contract assumptions.
