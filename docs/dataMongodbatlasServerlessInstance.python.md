# `dataMongodbatlasServerlessInstance` Submodule <a name="`dataMongodbatlasServerlessInstance` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasServerlessInstance <a name="DataMongodbatlasServerlessInstance" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance mongodbatlas_serverless_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  continuous_backup_enabled: typing.Union[bool, IResolvable] = None,
  links: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]] = None,
  state_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#name DataMongodbatlasServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.continuousBackupEnabled">continuous_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.stateName">state_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#name DataMongodbatlasServerlessInstance#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}.

---

##### `continuous_backup_enabled`<sup>Optional</sup> <a name="continuous_backup_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.continuousBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}.

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.links"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#links DataMongodbatlasServerlessInstance#links}

---

##### `state_name`<sup>Optional</sup> <a name="state_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.Initializer.parameter.stateName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks">put_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetContinuousBackupEnabled">reset_continuous_backup_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetLinks">reset_links</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetStateName">reset_state_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_links` <a name="put_links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks"></a>

```python
def put_links(
  value: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.putLinks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]

---

##### `reset_continuous_backup_enabled` <a name="reset_continuous_backup_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetContinuousBackupEnabled"></a>

```python
def reset_continuous_backup_enabled() -> None
```

##### `reset_links` <a name="reset_links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetLinks"></a>

```python
def reset_links() -> None
```

##### `reset_state_name` <a name="reset_state_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.resetStateName"></a>

```python
def reset_state_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsStandardSrv">connection_strings_standard_srv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.links">links</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList">DataMongodbatlasServerlessInstanceLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.mongoDbVersion">mongo_db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsBackingProviderName">provider_settings_backing_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsProviderName">provider_settings_provider_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsRegionName">provider_settings_region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabledInput">continuous_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.linksInput">links_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateNameInput">state_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabled">continuous_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateName">state_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `connection_strings_standard_srv`<sup>Required</sup> <a name="connection_strings_standard_srv" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.connectionStringsStandardSrv"></a>

```python
connection_strings_standard_srv: str
```

- *Type:* str

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.links"></a>

```python
links: DataMongodbatlasServerlessInstanceLinksList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList">DataMongodbatlasServerlessInstanceLinksList</a>

---

##### `mongo_db_version`<sup>Required</sup> <a name="mongo_db_version" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.mongoDbVersion"></a>

```python
mongo_db_version: str
```

- *Type:* str

---

##### `provider_settings_backing_provider_name`<sup>Required</sup> <a name="provider_settings_backing_provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsBackingProviderName"></a>

```python
provider_settings_backing_provider_name: str
```

- *Type:* str

---

##### `provider_settings_provider_name`<sup>Required</sup> <a name="provider_settings_provider_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsProviderName"></a>

```python
provider_settings_provider_name: str
```

- *Type:* str

---

##### `provider_settings_region_name`<sup>Required</sup> <a name="provider_settings_region_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.providerSettingsRegionName"></a>

```python
provider_settings_region_name: str
```

- *Type:* str

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `continuous_backup_enabled_input`<sup>Optional</sup> <a name="continuous_backup_enabled_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabledInput"></a>

```python
continuous_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `links_input`<sup>Optional</sup> <a name="links_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.linksInput"></a>

```python
links_input: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_name_input`<sup>Optional</sup> <a name="state_name_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateNameInput"></a>

```python
state_name_input: str
```

- *Type:* str

---

##### `continuous_backup_enabled`<sup>Required</sup> <a name="continuous_backup_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.continuousBackupEnabled"></a>

```python
continuous_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state_name`<sup>Required</sup> <a name="state_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.stateName"></a>

```python
state_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasServerlessInstanceConfig <a name="DataMongodbatlasServerlessInstanceConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_id: str,
  continuous_backup_enabled: typing.Union[bool, IResolvable] = None,
  links: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]] = None,
  state_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#name DataMongodbatlasServerlessInstance#name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.continuousBackupEnabled">continuous_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.links">links</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]</code> | links block. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.stateName">state_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#name DataMongodbatlasServerlessInstance#name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#project_id DataMongodbatlasServerlessInstance#project_id}.

---

##### `continuous_backup_enabled`<sup>Optional</sup> <a name="continuous_backup_enabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.continuousBackupEnabled"></a>

```python
continuous_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#continuous_backup_enabled DataMongodbatlasServerlessInstance#continuous_backup_enabled}.

---

##### `links`<sup>Optional</sup> <a name="links" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.links"></a>

```python
links: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]

links block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#links DataMongodbatlasServerlessInstance#links}

---

##### `state_name`<sup>Optional</sup> <a name="state_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceConfig.property.stateName"></a>

```python
state_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/mongodbatlas/d/serverless_instance#state_name DataMongodbatlasServerlessInstance#state_name}.

---

### DataMongodbatlasServerlessInstanceLinks <a name="DataMongodbatlasServerlessInstanceLinks" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasServerlessInstanceLinksList <a name="DataMongodbatlasServerlessInstanceLinksList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasServerlessInstanceLinksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataMongodbatlasServerlessInstanceLinks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>]]

---


### DataMongodbatlasServerlessInstanceLinksOutputReference <a name="DataMongodbatlasServerlessInstanceLinksOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_serverless_instance

dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.href">href</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.rel">rel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.href"></a>

```python
href: str
```

- *Type:* str

---

##### `rel`<sup>Required</sup> <a name="rel" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.rel"></a>

```python
rel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataMongodbatlasServerlessInstanceLinks, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasServerlessInstance.DataMongodbatlasServerlessInstanceLinks">DataMongodbatlasServerlessInstanceLinks</a>, cdktf.IResolvable]

---


