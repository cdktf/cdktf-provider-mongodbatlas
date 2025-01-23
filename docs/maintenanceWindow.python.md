# `maintenanceWindow` Submodule <a name="`maintenanceWindow` Submodule" id="@cdktf/provider-mongodbatlas.maintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MaintenanceWindow <a name="MaintenanceWindow" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window mongodbatlas_maintenance_window}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindow(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  day_of_week: typing.Union[int, float],
  project_id: str,
  auto_defer: typing.Union[bool, IResolvable] = None,
  auto_defer_once_enabled: typing.Union[bool, IResolvable] = None,
  defer: typing.Union[bool, IResolvable] = None,
  hour_of_day: typing.Union[int, float] = None,
  id: str = None,
  start_asap: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.autoDefer">auto_defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.autoDeferOnceEnabled">auto_defer_once_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.defer">defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startAsap">start_asap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.dayOfWeek"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}.

---

##### `auto_defer`<sup>Optional</sup> <a name="auto_defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.autoDefer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}.

---

##### `auto_defer_once_enabled`<sup>Optional</sup> <a name="auto_defer_once_enabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.autoDeferOnceEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}.

---

##### `defer`<sup>Optional</sup> <a name="defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.defer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}.

---

##### `hour_of_day`<sup>Optional</sup> <a name="hour_of_day" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.hourOfDay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_asap`<sup>Optional</sup> <a name="start_asap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.Initializer.parameter.startAsap"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer">reset_auto_defer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled">reset_auto_defer_once_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer">reset_defer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay">reset_hour_of_day</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetStartAsap">reset_start_asap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auto_defer` <a name="reset_auto_defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDefer"></a>

```python
def reset_auto_defer() -> None
```

##### `reset_auto_defer_once_enabled` <a name="reset_auto_defer_once_enabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetAutoDeferOnceEnabled"></a>

```python
def reset_auto_defer_once_enabled() -> None
```

##### `reset_defer` <a name="reset_defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetDefer"></a>

```python
def reset_defer() -> None
```

##### `reset_hour_of_day` <a name="reset_hour_of_day" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetHourOfDay"></a>

```python
def reset_hour_of_day() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_start_asap` <a name="reset_start_asap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.resetStartAsap"></a>

```python
def reset_start_asap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindow.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindow.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindow.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MaintenanceWindow to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals">number_of_deferrals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput">auto_defer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput">auto_defer_once_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput">day_of_week_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput">defer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsapInput">start_asap_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer">auto_defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled">auto_defer_once_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer">defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap">start_asap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `number_of_deferrals`<sup>Required</sup> <a name="number_of_deferrals" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.numberOfDeferrals"></a>

```python
number_of_deferrals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_defer_input`<sup>Optional</sup> <a name="auto_defer_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferInput"></a>

```python
auto_defer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_defer_once_enabled_input`<sup>Optional</sup> <a name="auto_defer_once_enabled_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabledInput"></a>

```python
auto_defer_once_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeekInput"></a>

```python
day_of_week_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defer_input`<sup>Optional</sup> <a name="defer_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.deferInput"></a>

```python
defer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `start_asap_input`<sup>Optional</sup> <a name="start_asap_input" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsapInput"></a>

```python
start_asap_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_defer`<sup>Required</sup> <a name="auto_defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDefer"></a>

```python
auto_defer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_defer_once_enabled`<sup>Required</sup> <a name="auto_defer_once_enabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.autoDeferOnceEnabled"></a>

```python
auto_defer_once_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defer`<sup>Required</sup> <a name="defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.defer"></a>

```python
defer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `start_asap`<sup>Required</sup> <a name="start_asap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.startAsap"></a>

```python
start_asap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindow.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MaintenanceWindowConfig <a name="MaintenanceWindowConfig" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import maintenance_window

maintenanceWindow.MaintenanceWindowConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  day_of_week: typing.Union[int, float],
  project_id: str,
  auto_defer: typing.Union[bool, IResolvable] = None,
  auto_defer_once_enabled: typing.Union[bool, IResolvable] = None,
  defer: typing.Union[bool, IResolvable] = None,
  hour_of_day: typing.Union[int, float] = None,
  id: str = None,
  start_asap: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek">day_of_week</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer">auto_defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled">auto_defer_once_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer">defer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#id MaintenanceWindow#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.startAsap">start_asap</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.dayOfWeek"></a>

```python
day_of_week: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#day_of_week MaintenanceWindow#day_of_week}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#project_id MaintenanceWindow#project_id}.

---

##### `auto_defer`<sup>Optional</sup> <a name="auto_defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDefer"></a>

```python
auto_defer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer MaintenanceWindow#auto_defer}.

---

##### `auto_defer_once_enabled`<sup>Optional</sup> <a name="auto_defer_once_enabled" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.autoDeferOnceEnabled"></a>

```python
auto_defer_once_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#auto_defer_once_enabled MaintenanceWindow#auto_defer_once_enabled}.

---

##### `defer`<sup>Optional</sup> <a name="defer" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.defer"></a>

```python
defer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#defer MaintenanceWindow#defer}.

---

##### `hour_of_day`<sup>Optional</sup> <a name="hour_of_day" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#hour_of_day MaintenanceWindow#hour_of_day}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#id MaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `start_asap`<sup>Optional</sup> <a name="start_asap" id="@cdktf/provider-mongodbatlas.maintenanceWindow.MaintenanceWindowConfig.property.startAsap"></a>

```python
start_asap: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.26.0/docs/resources/maintenance_window#start_asap MaintenanceWindow#start_asap}.

---



