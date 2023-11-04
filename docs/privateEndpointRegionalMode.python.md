# `mongodbatlas_private_endpoint_regional_mode`

Refer to the Terraform Registory for docs: [`mongodbatlas_private_endpoint_regional_mode`](https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode).

# `privateEndpointRegionalMode` Submodule <a name="`privateEndpointRegionalMode` Submodule" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpointRegionalMode <a name="PrivateEndpointRegionalMode" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode mongodbatlas_private_endpoint_regional_mode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalMode(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: PrivateEndpointRegionalModeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#project_id PrivateEndpointRegionalMode#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#enabled PrivateEndpointRegionalMode#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#id PrivateEndpointRegionalMode#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#project_id PrivateEndpointRegionalMode#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#enabled PrivateEndpointRegionalMode#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#id PrivateEndpointRegionalMode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#timeouts PrivateEndpointRegionalMode#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#create PrivateEndpointRegionalMode#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#delete PrivateEndpointRegionalMode#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#update PrivateEndpointRegionalMode#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivateEndpointRegionalMode resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalMode.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalMode.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalMode.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalMode.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivateEndpointRegionalMode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivateEndpointRegionalMode to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivateEndpointRegionalMode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateEndpointRegionalMode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference">PrivateEndpointRegionalModeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.timeouts"></a>

```python
timeouts: PrivateEndpointRegionalModeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference">PrivateEndpointRegionalModeTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivateEndpointRegionalModeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalMode.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointRegionalModeConfig <a name="PrivateEndpointRegionalModeConfig" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  timeouts: PrivateEndpointRegionalModeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#project_id PrivateEndpointRegionalMode#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#enabled PrivateEndpointRegionalMode#enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#id PrivateEndpointRegionalMode#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#project_id PrivateEndpointRegionalMode#project_id}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#enabled PrivateEndpointRegionalMode#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#id PrivateEndpointRegionalMode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeConfig.property.timeouts"></a>

```python
timeouts: PrivateEndpointRegionalModeTimeouts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#timeouts PrivateEndpointRegionalMode#timeouts}

---

### PrivateEndpointRegionalModeTimeouts <a name="PrivateEndpointRegionalModeTimeouts" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#create PrivateEndpointRegionalMode#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#delete PrivateEndpointRegionalMode#delete}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#update PrivateEndpointRegionalMode#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#create PrivateEndpointRegionalMode#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#delete PrivateEndpointRegionalMode#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.12.3/docs/resources/private_endpoint_regional_mode#update PrivateEndpointRegionalMode#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointRegionalModeTimeoutsOutputReference <a name="PrivateEndpointRegionalModeTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import private_endpoint_regional_mode

privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivateEndpointRegionalModeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privateEndpointRegionalMode.PrivateEndpointRegionalModeTimeouts">PrivateEndpointRegionalModeTimeouts</a>]

---



