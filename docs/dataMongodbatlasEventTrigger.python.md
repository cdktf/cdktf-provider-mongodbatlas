# `dataMongodbatlasEventTrigger` Submodule <a name="`dataMongodbatlasEventTrigger` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasEventTrigger <a name="DataMongodbatlasEventTrigger" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger mongodbatlas_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  project_id: str,
  trigger_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.triggerId">trigger_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}.

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.triggerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasEventTrigger resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasEventTrigger resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasEventTrigger to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configCollection">config_collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configDatabase">config_database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocument">config_full_document</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocumentBefore">config_full_document_before</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configMatch">config_match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationType">config_operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationTypes">config_operation_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProject">config_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProviders">config_providers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configSchedule">config_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configScheduleType">config_schedule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configServiceId">config_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.eventProcessors">event_processors</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList">DataMongodbatlasEventTriggerEventProcessorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.unordered">unordered</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerIdInput">trigger_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerId">trigger_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `config_collection`<sup>Required</sup> <a name="config_collection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configCollection"></a>

```python
config_collection: str
```

- *Type:* str

---

##### `config_database`<sup>Required</sup> <a name="config_database" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configDatabase"></a>

```python
config_database: str
```

- *Type:* str

---

##### `config_full_document`<sup>Required</sup> <a name="config_full_document" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocument"></a>

```python
config_full_document: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `config_full_document_before`<sup>Required</sup> <a name="config_full_document_before" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configFullDocumentBefore"></a>

```python
config_full_document_before: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `config_match`<sup>Required</sup> <a name="config_match" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configMatch"></a>

```python
config_match: str
```

- *Type:* str

---

##### `config_operation_type`<sup>Required</sup> <a name="config_operation_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationType"></a>

```python
config_operation_type: str
```

- *Type:* str

---

##### `config_operation_types`<sup>Required</sup> <a name="config_operation_types" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configOperationTypes"></a>

```python
config_operation_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_project`<sup>Required</sup> <a name="config_project" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProject"></a>

```python
config_project: str
```

- *Type:* str

---

##### `config_providers`<sup>Required</sup> <a name="config_providers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configProviders"></a>

```python
config_providers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `config_schedule`<sup>Required</sup> <a name="config_schedule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configSchedule"></a>

```python
config_schedule: str
```

- *Type:* str

---

##### `config_schedule_type`<sup>Required</sup> <a name="config_schedule_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configScheduleType"></a>

```python
config_schedule_type: str
```

- *Type:* str

---

##### `config_service_id`<sup>Required</sup> <a name="config_service_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.configServiceId"></a>

```python
config_service_id: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.disabled"></a>

```python
disabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `event_processors`<sup>Required</sup> <a name="event_processors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.eventProcessors"></a>

```python
event_processors: DataMongodbatlasEventTriggerEventProcessorsList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList">DataMongodbatlasEventTriggerEventProcessorsList</a>

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unordered`<sup>Required</sup> <a name="unordered" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.unordered"></a>

```python
unordered: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `trigger_id_input`<sup>Optional</sup> <a name="trigger_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerIdInput"></a>

```python
trigger_id_input: str
```

- *Type:* str

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTrigger.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasEventTriggerConfig <a name="DataMongodbatlasEventTriggerConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app_id: str,
  project_id: str,
  trigger_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.triggerId">trigger_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#app_id DataMongodbatlasEventTrigger#app_id}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#project_id DataMongodbatlasEventTrigger#project_id}.

---

##### `trigger_id`<sup>Required</sup> <a name="trigger_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.triggerId"></a>

```python
trigger_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#trigger_id DataMongodbatlasEventTrigger#trigger_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.41.1/docs/data-sources/event_trigger#id DataMongodbatlasEventTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataMongodbatlasEventTriggerEventProcessors <a name="DataMongodbatlasEventTriggerEventProcessors" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors()
```


### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge()
```


## Classes <a name="Classes" id="Classes"></a>

### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference <a name="DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId">config_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion">config_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config_account_id`<sup>Required</sup> <a name="config_account_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configAccountId"></a>

```python
config_account_id: str
```

- *Type:* str

---

##### `config_region`<sup>Required</sup> <a name="config_region" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.configRegion"></a>

```python
config_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridge</a>

---


### DataMongodbatlasEventTriggerEventProcessorsList <a name="DataMongodbatlasEventTriggerEventProcessorsList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataMongodbatlasEventTriggerEventProcessorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataMongodbatlasEventTriggerEventProcessorsOutputReference <a name="DataMongodbatlasEventTriggerEventProcessorsOutputReference" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_event_trigger

dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.awsEventbridge">aws_eventbridge</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors">DataMongodbatlasEventTriggerEventProcessors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_eventbridge`<sup>Required</sup> <a name="aws_eventbridge" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.awsEventbridge"></a>

```python
aws_eventbridge: DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList">DataMongodbatlasEventTriggerEventProcessorsAwsEventbridgeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessorsOutputReference.property.internalValue"></a>

```python
internal_value: DataMongodbatlasEventTriggerEventProcessors
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasEventTrigger.DataMongodbatlasEventTriggerEventProcessors">DataMongodbatlasEventTriggerEventProcessors</a>

---



